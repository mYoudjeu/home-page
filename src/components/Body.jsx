import ContainerComponent from "./ContainerComponent";

export default function Body() {
  return (
    <div>
      <div className="image-display">
        <div className="image-layout">
          <div className="image-overlay"></div>
        </div>
      </div>

      <ContainerComponent />
    </div>
  );
}
