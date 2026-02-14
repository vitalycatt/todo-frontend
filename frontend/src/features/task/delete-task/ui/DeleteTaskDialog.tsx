import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface DeleteTaskDialogProps {
  open: boolean;
  isLoading?: boolean;
  onConfirm?: () => void;
  onOpenChange: (open: boolean) => void;
}

export const DeleteTaskDialog = ({
  open,
  isLoading,
  onConfirm,
  onOpenChange,
}: DeleteTaskDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Удалить задачу?</AlertDialogTitle>

          <AlertDialogDescription>
            Это действие нельзя отменить. Задача будет удалена навсегда.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLoading ? "Удаление..." : "Удалить"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
