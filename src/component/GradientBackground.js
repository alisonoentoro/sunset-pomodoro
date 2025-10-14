// API from https://github.com/sarcadass/granim.js
import { useEffect, useRef } from "react";
import Granim from "granim";

const GradientBackground = ({ city }) => {
  const canvasRef = useRef(null)
  const granimRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    granimRef.current = new Granim({
      element: canvasRef.current,
      name: "granim",
      direction: "top-bottom",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#e86143", "#e87c43"],
            ["#e843cc", "#e84382"],
            ["#6a43e8", "#4358e8"]
          ],
          transitionSpeed: 5000
        },
        nyc: {
          gradients: [
            ["#eab64d", "#cfb94c"],
            ["#c15d12", "#fc95ff"],
            ["#95abff", "#001668"]
          ],
          transitionSpeed: 10000
        },
        sf: {
          gradients: [
            ["#ffd0f1", "#f5adf7"],
            ["#c15d12", "#d54783"],
            ["#3146d8", "#5d3bc9"]
          ],
          transitionSpeed: 10000
        },
        tokyo: {
          gradients: [
            ["#edadc8", "#2596be"],
            ["#6780f5", "#005efb"],
            ["#005efb", "#4a1d51"]
          ],
          transitionSpeed: 10000
        },
        london: {
          gradients: [
            ["#fd563b", "#e5777a"],
            ["#865b89", "#61406f"],
            ["#b24466", "#352b58"]
          ],
          transitionSpeed: 10000
        }
      }
    });

    return () => granimRef.current?.destroy()
  }, []);

  // Switch state whenever city changes
  useEffect(() => {
    const stateName = city || "default-state"
    if (granimRef.current) {
      granimRef.current.changeState(stateName)
    }
  }, [city]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none block"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 0, display: "block" }}
    />
  );
};

export default GradientBackground;
