import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  description: string;
};

function EditDrawer({ name, description }: Props) {
  return (
    <Drawer>
      <DrawerTrigger>{name}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit timesheet</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <form action="" className="h-[180px]">
            <input type="text" placeholder="Enter your name" />
            <input type="password" placeholder="password" />
            <input type="text" value={description} />
          </form>
          <Button>Submit</Button>
          <DrawerClose>
            {/* <Button variant="outline">Cancel</Button> */}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default EditDrawer;
