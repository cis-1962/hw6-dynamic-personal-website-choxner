import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Group,
  Image,
  Title,
  TextInput,
  Stack,
  Button,
  Textarea,
} from '@mantine/core';
import EditModal from './EditModal';
import {
  selectIntroduction,
  updateDescription,
  updateImgUrl,
} from '../features/introductionSlice';

export default function Introduction() {
  const { imgUrl, description } = useSelector(selectIntroduction);

  const [isEditing, setIsEditing] = useState(false);

  const [inputtedDescription, setInputtedDescription] = useState(description);
  const [inputtedImgUrl, setInputtedImgUrl] = useState(imgUrl);

  const dispatch = useDispatch();

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function handleSave() {
    dispatch(updateDescription(inputtedDescription));
    dispatch(updateImgUrl(inputtedImgUrl));
    toggleEditing();
  }

  return (
    <Group>
      <Image src={imgUrl} height={500} radius="lg" />
      <Stack>
        <Title order={3}>{description}</Title>
        <Button onClick={() => toggleEditing()} variant="filled">
          Edit
        </Button>

        <EditModal
          opened={isEditing}
          onClose={() => toggleEditing()}
          title="Edit the Introduction"
          onSave={() => handleSave()}
        >
          <Textarea
            value={inputtedDescription}
            label="Description"
            onChange={(e) => setInputtedDescription(e.target.value)}
          />
          <TextInput
            value={inputtedImgUrl}
            label="Image URL"
            onChange={(e) => setInputtedImgUrl(e.target.value)}
          />
        </EditModal>
      </Stack>
    </Group>
  );
}
