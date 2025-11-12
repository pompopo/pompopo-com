import { useCallback, useEffect, useState } from "react";
import Layout from "@theme/Layout";
import React from "react";
const WIDTH = 80;
const HEIGHT = 80;

export default function () {
  const initialState = () =>
    Array(HEIGHT)
      .fill(undefined)
      .map(() =>
        Array(WIDTH)
          .fill(undefined)
          .map(() => Math.random() > 0.8)
      );

  const [state, setState] = useState<boolean[][]>(() => initialState());
  const [generation, setGeneration] = useState(1);

  const reset = useCallback(() => {
    setState(initialState());
    setGeneration(1);
  }, []);
  const next = (oldState: typeof state) => {
    const nextState = Array(HEIGHT)
      .fill(undefined)
      .map(() => Array(WIDTH).fill(false));

    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        let neighbor = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) {
              continue;
            }

            let nextX = x + dx;
            if (nextX < 0) {
              nextX = WIDTH - 1;
            } else if (nextX === WIDTH) {
              nextX = 0;
            }

            let nextY = y + dy;
            if (nextY < 0) {
              nextY = HEIGHT - 1;
            } else if (nextY === HEIGHT) {
              nextY = 0;
            }

            if (oldState[nextY][nextX]) {
              neighbor += 1;
            }
          }
        }

        if (oldState[y][x]) {
          nextState[y][x] = neighbor === 2 || neighbor === 3;
        } else if (neighbor === 3) {
          nextState[y][x] = true;
        }
      }
    }
    return nextState;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setState((p) => next(p));
      setGeneration((p) => p + 1);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout title="Life Game">
      <div>{generation}</div>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {state.map((line, y) => (
            <tr key={`${y}`}>
              {line.map((dot, x) => (
                <td
                  key={`${y}-${x}`}
                  style={{
                    backgroundColor: state[y][x] ? "dimgray" : "white",
                    padding: 3,
                    border: "1px solid silver",
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ width: 100 }} onClick={reset}>
        リセット
      </button>
    </Layout>
  );
}
