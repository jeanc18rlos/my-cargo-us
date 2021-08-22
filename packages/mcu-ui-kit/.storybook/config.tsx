import { setOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";
import themeDecorator from "./theme-decorator";
import "@storybook/addon-console";

setOptions({
  panelPosition: "bottom",
  name: "My Cargo US UI Kit"
});

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "portal");
document.body.append(modalRoot);

const mobileMenuRoot = document.createElement("div");
mobileMenuRoot.setAttribute("id", "sideNavMobilePortal");
document.body.append(mobileMenuRoot);

const stickyRoot = document.createElement("div");
stickyRoot.setAttribute("id", "stickyPortal");
document.body.append(stickyRoot);

const snackRoot = document.createElement("div");
snackRoot.setAttribute("id", "snackPortal");
document.body.append(snackRoot);

addDecorator(themeDecorator);

configure(
  require.context("../src/components", true, /\.stories\.tsx$/),
  module
);
