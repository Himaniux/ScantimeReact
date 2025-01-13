import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost/wordpress/wp-json/wp/v2/pages/7') 
      .then((response) => setContent(response.data.content.rendered))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};

export default Hero;
