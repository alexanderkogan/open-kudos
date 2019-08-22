import { Divider, PageHeader } from 'antd'
import { ColumnProps } from 'antd/lib/table'
import React, { Fragment } from 'react'
import { pageTitles } from '../../setup/messages'
import PaginatedList from '../list/PaginatedList'
import { IUser } from './models/IUser'

const UsersPage: React.FC = () => {
  const endpoint = `/api/users/no_kudos`

  const columns: Array<ColumnProps<IUser>> = [
    {
      dataIndex: 'realName',
      key: 'realName',
      title: 'Name',
    },
    {
      dataIndex: 'kudosSpendable',
      key: 'kudosSpendable',
      title: 'Kudos to spendable'
    },
    {
      dataIndex: 'kudosGiveable',
      key: 'kudosGiveable',
      title: 'Kudos to give'
    },
    {
      dataIndex: 'kudosGranted',
      key: 'kudosGranted',
      title: 'Granted kudos'
    }
  ]

  return (
    <Fragment>
      <PageHeader
        title={pageTitles.usersWithoutKudos}
      />
      <Divider />
      <PaginatedList<IUser>
        columns={columns}
        endpoint={endpoint}
        pageSize={10}
      />
    </Fragment>
  )
}

export default UsersPage