const BackgroundPattern = () => {
  return (
    <>
      <style>
        {`
            
            .background-pattern{
                --dot-spacing: 13px;
                --dot-size: 1px;
                position: fixed;
                top: 0; left: 0; width: 100vw; height: 100vh;
                z-index: -1;
                opacity: 0.15;
                background-image: radial-gradient(var(--text) var(--dot-size), #00000000 var(--dot-size));
                background-size: var(--dot-spacing) var(--dot-spacing);
            }
        `}
      </style>
      <div className="background-pattern"></div>
    </>
  );
};

export default BackgroundPattern;
