const styles = {
  appBar: {
    display: 'flex',
  },

  drawerWrapper: {

    display: {
      xs: 'block',
      sm: 'none',
    },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 240,
    },
  },

  drawer: {
    mt: 5,
    textAlign: 'center',
  },

  listItemButton: {
    textAlign: 'center',
  },

  listItemText: {
    color: 'text.primary',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  iconButton: {
    mr: 2,
    display: { sm: 'none' },
  },

  h1: {
    flexGrow: 1,
    color: 'background.paper',
    py: 1,
  },

  navItemsWrapper: {
    display: {
      xs: 'none',
      sm: 'block',
    },
  },

  navLink: {
    color: 'background.paper',
  },
};

export default styles;
