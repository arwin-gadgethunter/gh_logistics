export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Sales',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Sales Order',
      url: '/order',
      icon: 'icon-pencil',
    },
    {
      name: 'Sales Order History',
      url: '/order/createorder',
      icon: 'icon-list',
    },
    {
      title: true,
      name: 'Rider',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Scan Order',
      url: '/theme/colors',
      icon: 'icon-pencil',
    },
    {
      name: 'Order History',
      url: '/theme/typography',
      icon: 'icon-list',
    },
  ],
};
