import {SIMPLE, FACTOR, PLUS, FILL, OK_FILL, PERCENT, INITIAL_R, INTERVAL} from "./circles/data";


export default
`<svg version="1.1"
  xmlns:parametric="https://github.com/parametric-svg/spec/tree/0.1"
  >
  <defs>
    <parametric:ref param="simple" default="${SIMPLE}" />
    <parametric:ref param="factor" default="${FACTOR}" />
    <parametric:ref param="plus" default="${PLUS}" />
    <parametric:ref param="fill" default="'${FILL}'" />
    <parametric:ref param="okFill" default="'${OK_FILL}'" />
    <parametric:ref param="percent" default="${PERCENT}" />
    <parametric:ref param="ok" default="true" />
    </defs>
  <circle id="circle-simple"
    parametric:r="simple" r="${INITIAL_R}"
    x="${0 * INTERVAL}"
    />
  <circle id="circle-factor"
    parametric:r="${INITIAL_R} * factor" r="${INITIAL_R}"
    x="${1 * INTERVAL}"
    />
  <circle id="circle-factor-plus"
    parametric:r="${INITIAL_R} * factor + plus" r="${INITIAL_R}"
    x="${2 * INTERVAL}"
    />
  <circle id="circle-factor-plus-fill"
    parametric:r="${INITIAL_R} * factor + plus" r="${INITIAL_R}"
    parametric:fill="fill"
    x="${3 * INTERVAL}"
    />
  <circle id="circle-fill"
    r="${INITIAL_R}"
    parametric:fill="fill"
    x="${4 * INTERVAL}"
    />
  <circle id="circle-ternary-fill"
    r="${INITIAL_R}"
    parametric:fill="ok ? okFill : fill"
    x="${5 * INTERVAL}"
    />
  <circle id="circle-percent"
    parametric:r="percent + '%'" r="${INITIAL_R}"
    x="${6 * INTERVAL}"
    />
  </svg>
`;
