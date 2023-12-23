"use client";

import React from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  IMessage,
} from "@novu/notification-center";

export default function NovuHeader() {
  function onNotificationClick(message: IMessage) {
    // your logic to handle the notification click
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  }
  return (
    <NovuProvider
      subscriberId={`c761c317-2037-4315-8a1a-829523a98403`}
      applicationIdentifier={"al1T0T69onU6"}
    >
      <PopoverNotificationCenter
        onNotificationClick={onNotificationClick}
        colorScheme={"light"}
      >
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}
