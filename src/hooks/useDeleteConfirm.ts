// src/hooks/useDeleteConfirm.ts
import { useState } from "react";

export const useDeleteConfirm = () => {
  const [open, setOpen] = useState(false);
  const [entityId, setEntityId] = useState<string | null>(null);
  const [entityName, setEntityName] = useState("");

  const showConfirm = (id: string, name: string) => {
    setEntityId(id);
    setEntityName(name);
    setOpen(true);
  };

  const hideConfirm = () => {
    setOpen(false);
    setEntityId(null);
    setEntityName("");
  };

  return {
    open,
    entityId,
    entityName,
    showConfirm,
    hideConfirm,
  };
};
