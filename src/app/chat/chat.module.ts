import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChatPageRoutingModule } from "./chat-routing.module";

import { ChatPage } from "./chat.page";

import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { NotificationService } from "../services/notification.service";

// Note we need a separate function as it's required
// by the AOT compiler.
export function lottiePlayerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    LottieModule.forRoot({ player: lottiePlayerFactory, useCache: true }),
  ],
  declarations: [ChatPage],
  providers: [],
})
export class ChatPageModule {}
