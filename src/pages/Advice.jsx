import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

const adviceList = [
  "Kunywa maji mengi kila siku.",
  "Pumzika vya kutosha na epuka msongo wa mawazo.",
  "Kula chakula bora na chenye virutubisho.",
  "Hudhuria kliniki mara kwa mara.",
  "Fanya mazoezi mepesi kama kutembea.",
  "Wasiliana na mkunga au daktari ukihisi mabadiliko yasiyo ya kawaida.",
];

export default function Advice() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Ushauri wa Afya (Swahili)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {adviceList.map((advice, idx) => (
          <Card key={idx} className="text-pink-700 font-medium">
            {advice}
          </Card>
        ))}
      </div>
    </MainLayout>
  );
}
