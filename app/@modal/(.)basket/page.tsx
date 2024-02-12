"use client";

import Basket from "@/components/Basket";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

function BasketInterception() {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  function handleCheckCart() {
    // Reload the page
    window.location.reload();
  }

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="h-4/5 w-full md:w-3/2 overflow-scroll max-w-3xl">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>
            <p>Content of your Basket</p>
            <Button
              className="mt-2 bg-walmart hover:bg-walmart/50"
              onClick={handleCheckCart}
            >
              Check Cart
            </Button>
          </DialogDescription>
        </DialogHeader>
        <Basket />
      </DialogContent>
    </Dialog>
  );
}

export default BasketInterception;
