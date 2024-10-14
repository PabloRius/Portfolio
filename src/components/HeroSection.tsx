import { SocialIcon } from './SocialIcon';

import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';

import Profile from '../assets/images/Gradu_sq.jpg';

export function HeroSection() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Pablo_Garcia_Rius_resume.pdf';
    link.download = 'Pablo_Garcia_Rius_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="HeroSection">
      <div className="Presentation">
        <p>
          Hey there! I’m Pablo – a passionate software engineer from Spain, and
          I’ve had the chance to live in 4 different countries. I recently
          graduated in Computer Engineering from the Universidad Carlos III de
          Madrid. I’m always looking for the next challenge, whether it’s
          building new software solutions or staying active. When I’m not
          coding, you’ll find me at the gym, exploring the outdoors, or trying
          out new activities. Want to know more? Scroll down and don’t forget to
          grab my CV!
        </p>
        <div className="Image">
          <img src={Profile} alt="Pablo García Rius graduating" />
        </div>
      </div>
      <div className="LastSection">
        <div className="SocialIcons">
          <SocialIcon
            Icon={IoMail}
            redirect="mailto::pablogrius@gmail.com"
            color="#367da2"
          />
          <SocialIcon
            Icon={IoLogoInstagram}
            redirect="https://www.instagram.com/pgriuss/?hl=en"
            color="#dd2985"
          />
          <SocialIcon
            Icon={IoLogoLinkedin}
            redirect="https://www.linkedin.com/in/pablo-rius"
            color="#0c65c3"
          />
          <SocialIcon
            Icon={IoLogoGithub}
            redirect="https://github.com/PabloRius"
            color="#1f2227"
          />
        </div>

        <button type="button" className="CV" onClick={downloadCV}>
          Download my CV
        </button>
      </div>
    </section>
  );
}
