import React, { useState } from "react";
import styled from "styled-components";

/* ============================================================================
  Styled Components
============================================================================ */
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

/* ============================================================================
  Create Component
  - 새 직원 정보 등록
============================================================================ */
export default function Create({ handleRegister }) {
  // 신규 직원 정보 상태
  const [form, setForm] = useState({
    name: "",
    age: "",
    job: "",
    language: "",
    pay: "",
  });

  // 인풋 값 변경 시 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("이름은 필수입니다.");
      return;
    }

    // 등록 핸들러 실행
    handleRegister(form);

    // 폼 초기화
    setForm({
      name: "",
      age: "",
      job: "",
      language: "",
      pay: "",
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {/* 각 항목 입력 */}
      {Object.keys(form).map((key) => (
        <Label key={key}>
          {key}
          <Input
            type="text"
            name={key}
            value={form[key]}
            onChange={handleChange}
          />
        </Label>
      ))}

      {/* 제출 버튼 */}
      <SubmitButton type="submit">등록</SubmitButton>
    </FormWrapper>
  );
}
