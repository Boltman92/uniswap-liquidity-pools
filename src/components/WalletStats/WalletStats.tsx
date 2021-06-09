import React from 'react'
import useStyles from './WalletStats.style'

import { useTranslation } from 'react-i18next'
import WidgetHeader from 'components/WidgetHeader/WidgetHeader'
import { Typography } from '@material-ui/core'

export default function WalletStats(): JSX.Element {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.walletStats}>
        <Typography variant="h6">{t('walletStats')}</Typography>
      </div>

      <div className={classes.headerWrapper}>
        <WidgetHeader.WalletStatsHeader
          title={t('totalValueSwapped')}
          earned={false}
          value={837.62}
          isWalletStats={true}
        />
        <WidgetHeader.WalletStatsHeader
          title={t('totalFeesPaid')}
          earned={false}
          value={2.51}
          isWalletStats={true}
        />
        <WidgetHeader.WalletStatsHeader
          title={t('totalTransactions')}
          earned={false}
          value={3}
          isWalletStats={true}
          showUsd={false}
        />
      </div>
    </div>
  )
}
