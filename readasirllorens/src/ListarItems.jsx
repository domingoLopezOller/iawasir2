import React from 'react'
import styles from './listarItems.module.css'

export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'bird','cat']; let contador=0;
    function getItemsList(){
        return ITEMS.map((item,index) => <li key={index}>{item}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}
export const ListarItems2= () => {
    let ITEMS = [{id:1,pet:'cat',dueno:'Domingo'},{id:2,pet:'dog',dueno:'Franco'},{id:3,pet:'bird',dueno:'Fredi'}];
    function getItemsList(){
        return ITEMS.map(item => <li key={item.id}>La mascota es {item.pet}, tiene {item.id+item.id} años y su dueño es {item.dueno}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}

import json2 from './heroes.json';
export const ListarItems3= () => {
  function getItems(){ return json2.map((heroe,index) => {
      if (heroe.publisher=="DC Comics"){
        return <li key={index}> {heroe.superhero} </li>;
      }
    });
  }
  return (
    <ul>
      {getItems()}
    </ul>
  )
}
export const ListarTabla= (props) => {
    function getItems(){ return json2.map((heroe,index) => {
        if (heroe.publisher===props.tipo){
          return <tr key={index} className={styles.tabla}><td className={styles.tabla}>{heroe.superhero}</td></tr>;
        }
      });
    }
    return (
      <table className={styles.tabla}>
        <thead>
        <tr className={styles.tabla}><th className={styles.cabecera}>Nombre del Héroe</th></tr>
        </thead>
        <tbody>
        {
          getItems()
        }
        </tbody>
      </table>
    )
  }

  export const ListarTablas= ({publisher,color})=> {
    if(publisher==="Marvel Comics"){
        return <ListarTabla tipo={publisher} color={color} />
    }
    else if(publisher==="DC Comics"){
        return <ListarTabla tipo={publisher} color={color} />
    }    
    else{
      return <p>No se han obtenido resultados</p>;
    }
}