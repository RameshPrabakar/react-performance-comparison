export const reportWebVitals = ({ id, name, label, value }) => {
    // In a real app, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      console.log({
        metric: {
          id,
          name,
          label,
          value
        }
      });
    }
  };