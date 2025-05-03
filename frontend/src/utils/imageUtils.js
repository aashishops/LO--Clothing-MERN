export const getProductImage = (imageName) => {
    try {
      // Dynamic import - webpack will handle this
      return require(`../uploads/${imageName}`).default;
    } catch (error) {
      // Fallback if image doesn't exist
      return require('../assets/Placeholder_Logo.png').default;
    }
  };
  