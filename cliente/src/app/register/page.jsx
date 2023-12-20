"use client"

import styles from '@/app/css/register.module.css';

import Link from 'next/link';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';


export default function RegisterPage(){


   
    

     





    const ValidationRegister = yup.object().shape({
        nome : yup
        .string()
        .required("Seu nome e obrigátorio"),


        email : yup
        .string()
        .email('Email inválido')
        .required('O email e obrigátorio'),

        senha : yup
        .string()
        .min(8, 'A senha deve ter no minimo 8 caracteres')
        .required('A senha e obrigátoria'),

        instagram : yup
        .string()
        .required('Seu instagram é obrigátorio')


    });



    return(
        <>
        
        <div className={styles.conteiner}>
            <h1>Cadastre-se</h1>
            <Formik
            initialValues={{}}
            validationSchema={ValidationRegister}
            
            >

            <Form className={styles.register_form}
            >
                <div className={styles.register_form_group}>
                    <Field name="nome" className={styles.form_field} placeholder="Nome" />

                    <ErrorMessage
                    component="span"
                    name='nome'
                    className={styles.form_error}/>


                </div>{/*register_form_group*/}

                <div className={styles.register_form_group}>
                    <Field name="email" className={styles.form_field} placeholder="Email" />

                    <ErrorMessage
                    component="span"
                    name='email'
                    className={styles.form_error}/>


                </div>{/*register_form_group*/}

                <div className={styles.register_form_group}>
                    <Field name="senha" className={styles.form_field} placeholder="Senha" type="password"  />

                    <ErrorMessage
                    component="span"
                    name='senha'
                    className={styles.form_error}/>


                </div>{/*register_form_group*/}

                <div className={styles.register_form_group}>
                    <Field name="instagram" className={styles.form_field} placeholder="Instagram" />

                    <ErrorMessage
                    component="span"
                    name='instagram'
                    className={styles.form_error}/>


                </div>{/*register_form_group*/}

                <button type='submit' className={styles.button_form}>
                    Criar minha conta
                </button>

                <p>Já possui uma conta ? click</p> <Link href="/login">Aqui</Link>








            </Form>




            </Formik>
        </div>

        
        
        </>
    )
}