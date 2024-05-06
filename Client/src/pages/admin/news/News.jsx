import React from 'react'
import Table from "../../../components/admin/table/Table"
import { slugName } from '../../../enum/EnumApi'
import { Box } from '@mui/material'
import SideBar from '../../../components/admin/sideBar/SideBar'
const AdNews = () => {
  return (
    <Box sx={{ display: 'flex' }}>
    <SideBar name="News"/>
    <Box component="main" sx={{ overflow: "auto" }}>
      <Table name= {slugName.news} />
    </Box>
  </Box>
  )
}

export default AdNews