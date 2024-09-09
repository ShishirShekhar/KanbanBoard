import { Button } from "antd";

const Tag = ({ value }: { value: string }) => {
  const buttonStyle = {
    background: value === "Low" ? "lightgreen" : "#FFCCCB",
    color: value === "Low" ? "darkgreen" : "darkred",
  };

  return (
    <Button type="primary" size="small" style={buttonStyle}>
      {value}
    </Button>
  );
};

export default Tag;
