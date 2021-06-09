import React, { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { data } from './data'
import useStyles from './Chart.style'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Granularities } from './common'

import CustomTick from './CustomTick'
import ChooseRange from './ChooseRange'
import CustomTooltip from './CustomTooltip'

export default function Chart(): JSX.Element {
  const [granularity, setGranularity] = useState<number>(Granularities.All)
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.wrapperStyle}>
      <div className={classes.centerStyle}>
        <div className={classes.liqStyle}>
          <Typography variant="h3">{t('liquidValue')}</Typography>
        </div>
        <div className={classes.selectDate}>
          {[Granularities[0], Granularities[1], Granularities[2]].map(
            (displayMethod, index) => {
              const isActive = granularity === index
              return (
                <ChooseRange
                  key={displayMethod}
                  isActive={isActive}
                  displayMethod={displayMethod}
                  onClick={setGranularity}
                  variant={index}
                />
              )
            }
          )}
        </div>
      </div>
      <ResponsiveContainer height={300} aspect={4.6}>
        <AreaChart
          data={data[granularity]}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          barCategoryGap={2}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor={'#ac1dfc'} stopOpacity={0.8} />
              <stop offset="95%" stopColor={'#ac1dfc'} stopOpacity={0.015} />
            </linearGradient>
          </defs>
          <XAxis
            tickLine={false}
            axisLine={false}
            allowDecimals={true}
            dataKey="day"
            interval="preserveEnd"
            tickMargin={15}
            minTickGap={0}
            tick={({ ...props }) => (
              <CustomTick
                x={props.x}
                y={props.y}
                payload={props.payload}
                granularity={granularity}
              />
            )}
            tickSize={10}
            type={'category'}
          />
          <YAxis
            type="number"
            orientation="right"
            axisLine={false}
            tickLine={false}
            minTickGap={6}
            yAxisId={0}
            tick={({ ...props }) => (
              <CustomTick
                x={props.x}
                y={props.y}
                payload={props.payload}
                isY={true}
              />
            )}
            interval="preserveEnd"
          />
          <Tooltip
            cursor={true}
            content={(props) => <CustomTooltip payload={props.payload} />}
            wrapperStyle={{ top: -70, left: -10 }}
          />
          <Area
            key={'other'}
            dataKey={'valueUSD'}
            stackId="2"
            strokeWidth={3.5}
            dot={false}
            type="monotone"
            name={t('liquidity')}
            yAxisId={0}
            stroke="#ac1dfc"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
