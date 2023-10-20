import { Modal, Button, Stack, Group } from '@mantine/core';
import { ReactNode } from 'react';

interface EditModalProps {
  children: ReactNode;
  title: string;
  opened: boolean;
  onClose: () => void;
  onSave: () => void;
}

export default function EditModal({
  children,
  title,
  opened,
  onClose,
  onSave,
}: EditModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Stack>
        {children}

        <Group>
          <Button onClick={onClose} variant="outline" color="red">
            Cancel
          </Button>

          <Button onClick={onSave} variant="filled">
            Save
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
