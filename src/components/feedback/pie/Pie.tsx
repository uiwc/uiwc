import { colors } from '../../../styles/colors';
import { PieProps } from './constants';
import { PieStyled } from './styled';

const cleanPercentage = (percentage: any) => {
  // we can set non-numbers to 0 here
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({
  size,
  colour,
  percentage,
  marginPercentage,
  strokePercentage,
  lineCap,
}: any) => {
  const halfSize = size / 2;
  const r = halfSize * (1 - marginPercentage);
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.

  return (
    <circle
      r={r}
      cx={halfSize}
      cy={halfSize}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={`${(halfSize / 100) * strokePercentage}em`}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap={lineCap}
      shapeRendering="geometricPrecision"
    ></circle>
  );
};

const Text = ({
  size = 200,
  percentage,
  textSizePercentage = 2.5,
  text = '',
  pre = '',
  post = '',
}: any) => {
  const halfSize = size / 2;

  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={`${(halfSize / 100) * textSizePercentage}em`}
    >
      {text ? (
        <>
          {pre}
          {text}
          {post}
        </>
      ) : (
        <>
          {pre}
          {percentage.toFixed(0)}
          {post}
        </>
      )}
    </text>
  );
};

export function Pie({
  size = 200,
  variant = 'primary',
  value = 0,
  marginPercentage = 0.15,
  strokePercentage = 1.4,
  textSizePercentage = 2.5,
  withoutText = false,
  lineCap = 'butt',
  text = '',
  pre = '',
  post = '%',
  ...rest
}: PieProps) {
  const percentage = cleanPercentage(value);
  const halfSize = size / 2;

  return (
    <PieStyled {...rest}>
      <svg width={size} height={size} className="img-fluid">
        <g transform={`rotate(-90 ${halfSize} ${halfSize})`}>
          <Circle
            size={size}
            colour="lightgrey"
            strokePercentage={strokePercentage}
            marginPercentage={marginPercentage}
            lineCap={lineCap}
          />
          <Circle
            size={size}
            colour={colors[variant]}
            percentage={percentage}
            strokePercentage={strokePercentage}
            marginPercentage={marginPercentage}
            lineCap={lineCap}
          />
        </g>
        {withoutText ? null : (
          <Text
            size={size}
            percentage={percentage}
            textSizePercentage={textSizePercentage}
            text={text}
            pre={pre}
            post={post}
          />
        )}
      </svg>
    </PieStyled>
  );
}
