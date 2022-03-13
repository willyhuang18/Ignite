
export default function Button(props) {
    let { action, title } = props;
    return <button style={style} onClick={action}>{title}</button>;
  };

  const style = {
    "width": "2rem",
    "height": "2rem",
    "borderRadius": "50%",
    "border": "none",
    "margin": "10px 0 0 0",
    "fontSize": "1em",

  }