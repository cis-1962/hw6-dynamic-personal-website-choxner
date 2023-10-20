import { useState, useRef } from 'react';
import { Image, Group, Text, Title, Button, Stack } from '@mantine/core';

import { useDispatch, useSelector } from 'react-redux';
import EditModal from './EditModal';
import { editPost, selectPostById, deletePost } from '../features/blogSlice';
import PostModalBody from './PostModalBody';

import { BlogPostType, RootState } from '../types/types';

interface BlogPostProps {
  id: string;
}

export default function BlogPost({ id }: BlogPostProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { title, description, imgUrl }: BlogPostType = useSelector(
    (state: RootState) => selectPostById(state, id),
  ) || { id: '', title: '', description: '', imgUrl: '' };

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Group>
        <Image src={imgUrl} height={300} width={200} alt={title} radius="lg" />
        <Stack align="flex-start" justify="flex-start">
          <Title order={2}>{title}</Title>
          <Text>{description}</Text>
          <Group>
            <Button
              variant="outline"
              color="red"
              onClick={() => dispatch(deletePost({ id }))}
            >
              Delete
            </Button>
            <Button variant="filled" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          </Group>
        </Stack>
      </Group>
      <EditModal
        title="Edit Post"
        opened={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={() => {
          dispatch(
            editPost({
              id,
              title: titleRef.current?.value,
              description: descriptionRef.current?.value,
              imgUrl: imgUrlRef.current?.value,
            }),
          );
          setIsEditing(false);
        }}
      >
        <PostModalBody
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          imgUrlRef={imgUrlRef}
          defaultTitle={title}
          defaultDescription={description}
          defaultImgUrl={imgUrl}
        />
      </EditModal>
    </>
  );
}
