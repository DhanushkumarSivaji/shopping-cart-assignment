import CartItemsComponent  from '../CartItems';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItems/Mobile',
  component: CartItemsComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const CartItemsStory = (args) => <CartItemsComponent {...args}/>;

export const CartItems = CartItemsStory.bind({});
CartItems.args = {
    data
};
