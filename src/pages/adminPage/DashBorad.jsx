// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/pW5p7qT0l7a
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { ResponsiveLine } from "@nivo/line"
// import { CardContent, Card, CardHeader } from "@/components/ui/card"
// import { Avatar } from "@/components/ui/avatar"

// export const DashBorad = () => {
//     return (
//         <div className="grid md:grid-cols-2 gap-4 w-full max-w-6xl items-start">
//             <div className="grid gap-4">
//                 <div className="flex items-center gap-4">
//                     <h3 className="text-lg font-semibold">Acme Inc</h3>
//                     <Button size="sm">Connect</Button>
//                 </div>
//                 <Card>
//                     <CardContent className="p-0">
//                         <div className="grid gap-4">
//                             <div className="flex items-center justify-between px-4">
//                                 <div className="flex items-center gap-2">
//                                     <h4 className="text-sm font-medium tracking-tighter">Total Revenue</h4>
//                                     <Badge color="gray">Month to Date</Badge>
//                                 </div>
//                                 <div className="grid grid-cols-2 items-center gap-4">
//                                     <div className="text-right">
//                                         <h5 className="text-sm font-semibold">$10,243.21</h5>
//                                         <div className="inline">+23.5%</div>
//                                     </div>
//                                     <div className="text-right">
//                                         <h5 className="text-sm font-semibold">$8,299.21</h5>
//                                         <div className="inline">Avg</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <Separator />
//                             <div className="p-4">
//                                 <CurvedlineChart className="w-full aspect-[3/2]" />
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//             <div className="grid gap-4">
//                 <Card>
//                     <CardContent className="p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="flex items-center gap-2">
//                                 <Avatar className="w-8 h-8">
//                                     <img
//                                         alt="Avatar"
//                                         className="rounded-full"
//                                         height="32"
//                                         src="/placeholder.svg"
//                                         style={{
//                                             aspectRatio: "32/32",
//                                             objectFit: "cover",
//                                         }}
//                                         width="32"
//                                     />
//                                 </Avatar>
//                                 <div>
//                                     <h4 className="text-sm font-semibold">Alice Johnson</h4>
//                                     <div className="inline">Sales Manager</div>
//                                 </div>
//                             </div>
//                             <Button size="sm">Message</Button>
//                         </div>
//                     </CardContent>
//                 </Card>
//                 <Card>
//                     <CardHeader className="p-4">
//                         <div className="grid gap-2">
//                             <h3 className="text-base font-bold">Performance</h3>
//                             <div className="inline">
//                                 Performance is a measure of how effectively and efficiently you are achieving your goals.
//                             </div>
//                         </div>
//                     </CardHeader>
//                     <CardContent className="p-4">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                                 <h4 className="text-sm font-semibold">Performance</h4>
//                                 <Badge>Good</Badge>
//                             </div>
//                             <Button size="sm">Improve</Button>
//                         </div>
//                         <Separator className="my-4" />
//                         <div className="grid gap-1">
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <ActivityIcon className="w-4 h-4" />
//                                     <div className="flex items-center gap-1">
//                                         <h5 className="text-xs font-semibold">Completed Tasks</h5>
//                                         <div className="text-xs">23/30</div>
//                                     </div>
//                                 </div>
//                                 <div className="w-16 h-2 rounded-lg" />
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <ActivityIcon className="w-4 h-4" />
//                                     <div className="flex items-center gap-1">
//                                         <h5 className="text-xs font-semibold">Meetings</h5>
//                                         <div className="text-xs">5</div>
//                                     </div>
//                                 </div>
//                                 <div className="w-16 h-2 rounded-lg" />
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <ActivityIcon className="w-4 h-4" />
//                                     <div className="flex items-center gap-1">
//                                         <h5 className="text-xs font-semibold">Late Tasks</h5>
//                                         <div className="text-xs">3</div>
//                                     </div>
//                                 </div>
//                                 <div className="w-16 h-2 rounded-lg" />
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     )
// }

// function ActivityIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//         </svg>
//     )
// }


// function CurvedlineChart(props) {
//     return (
//         <div {...props}>
//             <ResponsiveLine
//                 data={[
//                     {
//                         id: "Desktop",
//                         data: [
//                             { x: "Jan", y: 43 },
//                             { x: "Feb", y: 137 },
//                             { x: "Mar", y: 61 },
//                             { x: "Apr", y: 145 },
//                             { x: "May", y: 26 },
//                             { x: "Jun", y: 154 },
//                         ],
//                     },
//                     {
//                         id: "Mobile",
//                         data: [
//                             { x: "Jan", y: 60 },
//                             { x: "Feb", y: 48 },
//                             { x: "Mar", y: 177 },
//                             { x: "Apr", y: 78 },
//                             { x: "May", y: 96 },
//                             { x: "Jun", y: 204 },
//                         ],
//                     },
//                 ]}
//                 margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//                 xScale={{
//                     type: "point",
//                 }}
//                 yScale={{
//                     type: "linear",
//                     min: 0,
//                     max: "auto",
//                 }}
//                 curve="monotoneX"
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 0,
//                     tickPadding: 16,
//                 }}
//                 axisLeft={{
//                     tickSize: 0,
//                     tickValues: 5,
//                     tickPadding: 16,
//                 }}
//                 colors={["#2563eb", "#e11d48"]}
//                 pointSize={6}
//                 useMesh={true}
//                 gridYValues={6}
//                 theme={{
//                     tooltip: {
//                         chip: {
//                             borderRadius: "9999px",
//                         },
//                         container: {
//                             fontSize: "12px",
//                             textTransform: "capitalize",
//                             borderRadius: "6px",
//                         },
//                     },
//                     grid: {
//                         line: {
//                             stroke: "#f3f4f6",
//                         },
//                     },
//                 }}
//                 role="application"
//             />
//         </div>
//     )
// }
