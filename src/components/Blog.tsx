import { useState, useRef } from 'react';
import { Title, Button, Group, Stack, Divider } from '@mantine/core';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { addPost, selectAllBlogPosts } from '../features/blogSlice';
import BlogPost from './BlogPost';
import EditModal from './EditModal';
import PostModalBody from './PostModalBody';

export default function Blog() {
  const dispatch = useDispatch();
  const postsData = useSelector(selectAllBlogPosts);

  const [isEditing, setIsEditing] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Stack>
        <Divider my="sm" variant="dotted" />
        <Group grow>
          <Title>Blog</Title>
          <Button onClick={() => setIsEditing(true)}>Add a Post</Button>
        </Group>
        <Divider my="sm" variant="dotted" />
        {postsData &&
          postsData.map((post) => <BlogPost key={post.id} {...post} />)}
      </Stack>

      <EditModal
        opened={isEditing}
        onClose={() => setIsEditing(false)}
        title="Add a Post"
        onSave={() => {
          dispatch(
            addPost({
              id: nanoid(),
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
        />
      </EditModal>
    </>
  );
}
