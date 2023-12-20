"use client"

import Image from 'next/image'
import styles from '@/app/css/inicio.module.css'
import Link from 'next/link'





export default function Inicio() {

  

  return (
    <>
      <div className={styles.conteiner}>

        <nav className={styles.navegacao}>


          <div className={styles.imagens_left}>

            
          <a href="/register">
              <Image src="/perfil.png" width={500} height={500} className={styles.imagen_left}/>
            </a>
       
            

            <a href="/">
              <Image src="/coracao.png" width={500} height={500} className={styles.imagen_left}/>
            </a>

          </div>{/*imagens_left*/}

          <div className={styles.logo}>
            <h2 className={styles.texto_logo}>Diogo dos panos</h2>
          </div>{/*logo*/}


          

          <div className={styles.imagens_right}>



            <a href="/">
              <Image src="/lupa.png" width={500} height={500} className={styles.imagen_right}/>
            </a>

            

            <a href="/">
              <Image src="/carrinho-de-compras.png" width={500} height={500} className={styles.imagen_right}/>
            </a>

            

            

          </div>{/*imagens_right*/}
          
          
            

        </nav>{/*navegacao*/}

        
        <section className={styles.categorias}>

          <Link href="/" className={styles.link}>
            Todos
          </Link>

          <Link href="/categorias/blusa" className={styles.link}>
             Blusas
          </Link>

          <Link href="/" className={styles.link}>
              short
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

          <Link href="/" className={styles.link}>
            Catégorias
          </Link>

         
            
        </section>{/*categorias*/}

        <section className={styles.telao}>

          <Image src="/logo diogo dos pano.jpg" width={600} height={450} className={styles.imagen_telao} ></Image>
        </section>



        <section className={styles.cards_roupas}>

          <div className={styles.box_card}>
            <Image src="/roupas/roupa blusa 1.jpeg" width={200} height={200} className={styles.imagen_card}></Image>
            
            <div className={styles.info}>
              <h2>Kit blusa e short</h2>
              <p>Disponiveis: 1</p>
            </div>

            
        
         
            

            
            

            

          </div>
          
          
        
        

          <div className={styles.box_card}>
            <Image src="/roupa diogo 2.jpeg" width={200} height={200} className={styles.imagen_card}></Image>
            
            <div className={styles.info}>
              <h2>Blusa</h2>
              <p>Disponiveis: 1</p>
            </div>

            <a href="/">
              <button className={styles.botao_comprar}>COMPRAR</button>
            </a>
    

          </div>
          

          <div className={styles.box_card}>
            <Image src="/roupa diogo 1.jpeg" width={200} height={200} className={styles.imagen_card}></Image>
            
            <div className={styles.info}>
              <h2>Blusa </h2>
              <p>Disponiveis: 1</p>
            </div>

          </div>
            
            
          

          
            
          <div className={styles.box_card}>
            <Image src="/roupa diogo 4.jpeg" width={200} height={200} className={styles.imagen_card}></Image>
            
            <div className={styles.info}>
              <h2>Kit blusa e short</h2>
              <p>Disponiveis: 1</p>
            </div>

          </div>



        </section>
          
     

 


      </div>{/*conteiner*/} 


      

      
    </>
  )
}
