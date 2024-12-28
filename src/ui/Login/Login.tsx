'use client';

import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import CloseIcon from './CloseIcon.svg';
import LockIcon from './LockIcon.svg';
import { Field, Form } from 'react-final-form';
import cn from 'classnames';
import { useRouter } from 'next/navigation';

type TProps = {
  onSuccess?: Function
  onError?: Function,
  referrer?: string,
}

function Login({
  onSuccess = () => {},
  onError = () => {},
  referrer,
}: TProps) {
  const router = useRouter();
  const [shaking, setShaking] = useState(false);
  const onSubmit = async (values: any) => {
    if (!values.password) {
      shake();
      onError();
    }
    const success = true;

    if (!success) {
      shake();
      return onError();
    }

    return onSuccess();
  };

  const shake = () => {
    setShaking(true);

    setTimeout(() => {
      setShaking(false);
    }, 400);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // ContactsService.getEmail()
  return (
    <div className={ styles.login }>
        <button
          className={ styles.closeBtnWrp }
          onClick={ () => {
            if (referrer) {
              router.back();
            } else {
              router.push('/');
            }
          } }
          aria-label={ 'Close' }
        >
          <CloseIcon />
        </button>
        <LockIcon />
        <div className={ styles.icon }></div>
        <div className={ styles.description }>
          Цей розділ прихований за завісою конфіденційності, мов портал до іншого виміру. <br />
          Доступ залишається обмеженим, але для допитливих завжди є спосіб знайти шлях.<br />
          Щоб отримати пароль, зверніться до тієї людини, хто надіслав вам посилання — можливо, саме це стане вашим ключем до таємниці.
        </div>
        <div className={ cn(styles.formWrp, { [styles.shaking]: shaking }) }>
          <Form onSubmit={ onSubmit }>
            {
              (props) => (
                <form onSubmit={ props.handleSubmit }>
                  <Field
                    className={ styles.input }
                    type={ 'password' }
                    placeholder={ 'Кажи пароль' }
                    component={ 'input' }
                    name={ 'password' }
                  />
                  <button
                    type={ 'submit' }
                    className={ styles.submitBtn }
                    disabled={ !props.values.password?.length }
                  >
                    Вхід
                  </button>
                </form>
              )
            }
          </Form>
        </div>
    </div>
  );
}

export default Login;
