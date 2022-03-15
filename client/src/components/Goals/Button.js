
export default function Button(props) {
    let { action, title } = props;
    return <button style={style} onClick={action}>{title}</button>;
  };

  const style = {
    "width": "2rem",
    "height": "2rem",
    "background": "none",
    "border": "none",
    "padding": "0 0 50px",
    "fontSize": "30px",
  }