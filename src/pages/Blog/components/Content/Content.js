import "./Content.css";
import image from '../../../../assets/images/1.jpg'
import image1 from '../../../../assets/images/6.jpg'
import image2 from '../../../../assets/images/3.png'
import image3 from '../../../../assets/images/4.png'
import image4 from '../../../../assets/images/5.jpg'
const Content = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post Title",
      image: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed libero risus. Donec tincidunt finibus lacus, quis tincidunt eros posuere vel.",
    },
    {
      id: 2,
      title: "Blog Post Title",
      image: image1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed libero risus. Donec tincidunt finibus lacus, quis tincidunt eros posuere vel.",
    },
    {
      id: 3,
      title: "Blog Post Title",
      image: image2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed libero risus. Donec tincidunt finibus lacus, quis tincidunt eros posuere vel.",
    },
    {
      id: 4,
      title: "Blog Post Title",
      image: image4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed libero risus. Donec tincidunt finibus lacus, quis tincidunt eros posuere vel.",
    },
  ]



  return (
    <div className="content-container">
      {blogPosts.map((blogPost) => (
         <div class="blog-card" key={blogPost.id}>
        <img src={blogPost.image} alt="Blog post" />
        <h2>{blogPost.title}</h2>
        <p>
         {blogPost.description}
        </p>
        <div class="social-icons">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
      ))}



    </div>
  );
};

export default Content;
