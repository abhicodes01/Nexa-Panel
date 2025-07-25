"use client";
import React from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart as BarGraph,
  XAxis,
  YAxis,
} from "recharts";
type Props = {};

export default function Barcharts({}: Props) {
  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis dataKey={'name'}
        tickLine={false}
        axisLine={false}
        stroke="#FFFFFF"
        fontSize={12} />

        <YAxis
        tickLine={false}
        axisLine={false}
        stroke="#FFFFFF"
        fontSize={12}
        tickFormatter={(value)=>`$${value}`} />

        <Bar dataKey={"total"} radius={[4,4,0,0]} fill="white"/>
      </BarGraph>
    </ResponsiveContainer>
  );
}
