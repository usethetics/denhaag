import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Tabs } from '../..'
import { TabsProps } from '../../components/navigation/Tabs/Tabs'
import pkg from '../../components/navigation/Tabs/package.json'
import Tab from '../../components/navigation/Tab/Tab'
import TabPanel from '@material-ui/lab/TabPanel'
import { TabContext } from '@material-ui/lab'

export default {
  title: 'Components/Navigation/Tabs',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Tabs
} as Meta

// const TemplateWithState = (props: TabsProps) => {
//   return (
//     <div>
//       <TabContext value={props.value.toString()}>
//         <AppBar>
//           <Tabs {...props}>
//             <Tab label='First tab' value={1} />
//             <Tab label='Second tab' value={2} />
//             <Tab label='Third tab' value={3} />
//           </Tabs>
//         </AppBar>
//         <TabPanel value='1'>Item One</TabPanel>
//         <TabPanel value='2'>Item Two</TabPanel>
//         <TabPanel value='3'>Item Three</TabPanel>
//       </TabContext>
//     </div>
//   )
// }

const Template: Story<TabsProps> = (args: any) => {
  // @ts-ignore
  const [value, setValue] = React.useState(2)

  // @ts-ignore
  args.onChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  args.value = value

  return (
    <TabContext value={args.value.toString()}>
      <Tabs {...args}>
        <Tab label='First tab' value={1} />
        <Tab label='Second tab' value={2} />
        <Tab label='Third tab' value={3} />
      </Tabs>
      <TabPanel value='1'>Item One</TabPanel>
      <TabPanel value='2'>Item Two</TabPanel>
      <TabPanel value='3'>Item Three</TabPanel>
    </TabContext>
  )
}

/**
 * Implementation of Tabs
 */
export const Default = Template.bind({})
Default.args = {}
