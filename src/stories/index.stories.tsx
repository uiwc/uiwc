// import { Story, Meta } from '@storybook/react/types-6-0';
// import { utilities } from '../styles/utilities';
// import { Utils } from '../utils';
// import { colors } from '../styles/colors';
// import { readableColor } from 'polished';
// import { Flex } from '../components/layout/flex';

// export default {
//   title: 'CSS',
// } as Meta;

// const Template: Story = (args: any) => {
//   return <div dangerouslySetInnerHTML={{ __html: printUtilities() }} />;
// };

// export const ColorSwatches: Story = (args: any) => {
//   return (
//     <>
//       {Object.entries(colors)
//         .filter(([key]) => key !== 'transparent')
//         .map(([key, value]) => (
//           <>
//             <div
//               className="border d-inline-block m-1 text-center"
//               style={{ width: '110px', height: '150px' }}
//             >
//               <Flex direction="column" className="h-100">
//                 <Flex
//                   direction="column"
//                   justify="center"
//                   className="border-bottom cursor-pointer w-100 h-70"
//                   style={{
//                     backgroundColor: value,
//                     color: readableColor(value),
//                   }}
//                   onClick={() => {
//                     navigator.clipboard.writeText(value);
//                   }}
//                   title={`Click to copy ${value.toUpperCase()}`}
//                 >
//                   {value.toUpperCase()}
//                 </Flex>
//                 <Flex direction="column" justify="center" className="h-30">
//                   <code className="d-block" style={{ fontSize: '0.8rem' }}>
//                     {key}
//                   </code>
//                 </Flex>
//               </Flex>
//             </div>
//           </>
//         ))}
//     </>
//   );
// };
// ColorSwatches.parameters = {
//   controls: { hideNoControlsWarning: true },
// };

// export const Utilities = Template.bind({});
// Utilities.parameters = {
//   controls: { hideNoControlsWarning: true },
// };

// const printUtilities = () => {
//   return `
//     ${Object.entries(utilities)
//       .map((item: any) => {
//         const key = item[0];
//         const value = item[1];
//         return `
//           <h3>${Utils.titleize(
//             Utils.humanize(key)
//           )} <span class="text-spanish">${
//           value.responsive ? '(responsive)' : ''
//         }</span></h3>

//           <table class="sample-table">
//             <colgroup>
//               <col width="33%" />
//               <col width="33%" />
//               <col width="33%" />
//             </colgroup>
//             <thead>
//               <tr>
//               <th>CSS Properties</th>
//                 <th>HTML Class</th>
//                 <th>Value</th>
//               </tr>
//             </thead>

//             <tbody>
//               ${value.values
//                 .map((i: any, index: number) => {
//                   const key = Utils.isObject(i) ? Object.keys(i)[0] : i;
//                   let val = Utils.isObject(i) ? Object.values(i)[0] : i;

//                   if (Utils.isHexColor(val)) {
//                     val = `<span style="background-color:${val};display: inline-block; width: 1rem; height: 1rem;border: solid 1px #333; border-radius: 100%"></span> <span class="text-uppercase">${val}</span>`;
//                   }

//                   return `
//                   <tr>
//                    ${
//                      index === 0
//                        ? `<td rowspan="${
//                            value.values.length + (value.auto ? 1 : 0)
//                          }">
//                         ${(Utils.isString(value.property)
//                           ? [value.property]
//                           : value.property
//                         ).join('<br />')}

//                     </td>`
//                        : ''
//                    }
//                     <td>
//                       <code>.${value.class !== null ? value.class : ''}${
//                     key !== ''
//                       ? `${value.class !== null ? '-' : ''}${key}`
//                       : key
//                   }</code>
//                     </td>

//                     <td>
//                       ${val}${value.unit ? value.unit : ''}
//                     </td>

//                   </tr>
//                 `;
//                 })
//                 .join(' ')}

//           ${
//             value.auto
//               ? `
//             <tr>
//               <td><span class="fw-bold text-primary">.${value.class}-auto</span></td>
//               <td>auto</td>
//             </tr>
//             `
//               : ''
//           }
//             </tbody>
//           </table>
//         `;
//       })
//       .join(' ')}
//   `;
// };
