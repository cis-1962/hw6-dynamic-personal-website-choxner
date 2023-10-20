import { Stack, TextInput, Textarea } from '@mantine/core';
import { RefObject } from 'react';

interface PostModalBodyProps {
  titleRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  imgUrlRef: RefObject<HTMLInputElement>;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultImgUrl?: string;
}

export default function PostModalBody({
  titleRef,
  descriptionRef,
  imgUrlRef,
  defaultTitle,
  defaultDescription,
  defaultImgUrl,
}: PostModalBodyProps) {
  return (
    <Stack>
      <TextInput ref={titleRef} defaultValue={defaultTitle} label="Title" />
      <Textarea
        ref={descriptionRef}
        defaultValue={defaultDescription}
        label="Description"
      />
      <TextInput
        ref={imgUrlRef}
        defaultValue={defaultImgUrl}
        label="Image URL"
      />
    </Stack>
  );
}
