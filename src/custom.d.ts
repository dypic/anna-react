/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
  const content: any
  export default content
}
declare module "*.png" {
  const content: any
  export default content
}
// resolveJsonModule를 true로 했기 때문에 작동이 되야하는데, json을 계속 오류로 인식해서 추가해둠
declare module "*.json" {
  const content: any
  export default content
}
