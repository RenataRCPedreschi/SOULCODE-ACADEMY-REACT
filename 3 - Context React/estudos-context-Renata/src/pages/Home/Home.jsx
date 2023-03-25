import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;


  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Home</h1>
      <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit placeat sit quaerat quasi neque! Vitae quaerat commodi dolor nulla, deserunt optio dignissimos laboriosam harum itaque fugiat ipsam nam amet quos dolores asperiores ad dolorem voluptatum ab id? Nobis fuga vitae dolor quo officia fugiat illum molestias quam voluptate pariatur cumque omnis culpa, nulla ducimus id hic perspiciatis officiis sint distinctio vel. Doloribus deserunt distinctio adipisci dignissimos atque quae mollitia fugiat laborum? Dolor at, qui maxime fuga quibusdam minus accusantium necessitatibus? Rem corrupti suscipit, perspiciatis ad esse nisi exercitationem, officiis necessitatibus aliquid distinctio commodi. Molestiae iusto eos alias magni laudantium cumque ad quo, sapiente autem. Facilis officiis minima officia, placeat eius temporibus, quidem consequuntur itaque incidunt quas aliquam, laborum corporis cum nobis. Explicabo odit fuga corrupti perferendis error cum possimus assumenda vero vel vitae, quo impedit aliquam! Quos quas architecto ad accusantium ducimus sequi, dolorum atque facilis tempore aliquid deleniti blanditiis aperiam a animi impedit quam sunt dolores minus eius ullam inventore? Quae perferendis deleniti soluta minus maxime harum cupiditate tempora, velit libero eligendi voluptates hic blanditiis similique rem aliquam amet ab corrupti cum molestias doloremque odio illo dolor. Modi atque consectetur provident asperiores optio sint. Soluta necessitatibus quaerat, reiciendis eius debitis autem expedita eum amet molestiae, nisi et delectus perspiciatis ducimus vero, eligendi velit porro asperiores modi sapiente quos! Fugit aliquam adipisci, sed animi a placeat fugiat vero quaerat minus corporis consequuntur laborum laboriosam reprehenderit necessitatibus molestiae quae quia tempore! Nisi excepturi quia facere ipsam error sapiente sed animi dolorem eos soluta cupiditate nam omnis iste earum, id officia numquam voluptatem ipsa qui pariatur ab quis. Ipsum dolorem ea quo harum est nisi tempora suscipit ab veniam culpa impedit voluptate tenetur numquam incidunt doloremque beatae eius, voluptatibus aspernatur ducimus, modi minima. Veniam mollitia ipsa fugiat quo, perferendis quasi voluptas natus?</p>
    </div>
  )
}
