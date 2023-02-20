const styles = {
  paper: {
    p: 1,
    position: 'relative',
  },

  header: {
    cursor: 'pointer',
    fontSize: 'h6.fontSize',
  },

  favorite: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
    bgcolor: 'background.paper',
  },

  imageWrapper: {
    position: 'relative',
    paddingTop: '52.46%',
    cursor: 'pointer',
  },

  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 1,
  },

  link: {
    mb: 1,
  },

  keywords: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
  },
}

export default styles
