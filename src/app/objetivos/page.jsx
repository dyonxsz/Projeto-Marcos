"use client";
import React from "react";

export default function NutritionGoalScreen() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#DAD8CB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#2D4539",
      }}
    >

      {/* Header: Logo + Nome + Voltar */}
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        {/* Logo + Nome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="/logo.jpg"
            alt="NutriSense Logo"
            style={{
              width: 48,
              height: 48,
              objectFit: "contain",
            }}
          />

          {/* AQUI A FONTE JERSEY 20 É APLICADA */}
          <h2
            style={{
              fontFamily: "'Jersey 20', sans-serif",
              fontSize: "48px",
              color: "#2D4539",
              margin: 0,
            }}
          >
            NutriSense
          </h2>
        </div>

        {/* Botão de voltar */}
        <span
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={() => window.history.back()}
        >
          ↩
        </span>
      </div>

      {/* Avatar */}
      <div
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          border: "3px solid #2D4539",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span style={{ fontSize: "50px" }}>👤</span>
      </div>

      {/* Nome do usuário */}
      <h3 style={{ marginTop: "5px", marginBottom: "30px" }}>Ruan Pereira</h3>

      {/* Título */}
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Defina seu objetivo de
        <br />
        nutrição
      </h2>

      {/* Inputs */}
      <div
        style={{
          width: "260px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <label style={{ fontWeight: 600 }}>Peso</label>
        <input defaultValue="68kg" style={inputStyle} />

        <label style={{ fontWeight: 600 }}>Altura</label>
        <input defaultValue="172 cm" style={inputStyle} />

        <label style={{ fontWeight: 600 }}>Objetivo</label>
        <input
          defaultValue="Perca de Peso"
          style={{
            ...inputStyle,
            border: "2px solid #2D4539",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* Botão */}
      <button
        style={{
          marginTop: "40px",
          padding: "8px 30px",
          background: "#2D4539",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        avançar
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  background: "#EFEDE4",
  border: "1px solid #A5A49A",
  borderRadius: "5px",
  fontSize: "15px",
};
