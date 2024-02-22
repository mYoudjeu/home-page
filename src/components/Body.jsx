import ContainerComponent from "./ContainerComponent";

export default function Body() {
  return (
    <div className="image-display">
      <div className="image-layout">
        <div className="image-overlay"></div>
      </div>

      <ContainerComponent />
    </div>
  );
}
