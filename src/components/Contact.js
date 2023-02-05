import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3620.1221505384224!2d67.02261361461419!3d24.859677334054293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sodean%20center!5e0!3m2!1sen!2s!4v1675590168769!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title="odean" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/xwkjvgpl' method='POST' className='contact-inputs'>
            <input type='text' name='username' placeholder='username' required autoComplete='off' />
            <input type='email' name='email' placeholder='email' required autoComplete='off' />
            <textarea name='message' placeholder='Enter message' required autoComplete='off' cols='30' rows='10'>
            </textarea>
            <input type='submit' value='send'/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;