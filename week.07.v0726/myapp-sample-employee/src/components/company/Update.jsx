import React, { useEffect, useState } from "react";
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
  background-color: #32cd32;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

/* ============================================================================
  Update Component
  - 기존 직원 정보 수정
============================================================================ */
export default function Update({ selectedKey, handleUpgrade }) {
  // 수정 폼 상태
  const [form, setForm] = useState(selectedKey);

  // selectedKey가 변경될 경우 form 동기화
  useEffect(() => {
    setForm(selectedKey);
  }, [selectedKey]);

  // 입력 변경 시 상태 반영
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 제출 시 업데이트 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("이름은 필수입니다.");
      return;
    }

    handleUpgrade(form);
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
            value={form[key] ?? ""}
            onChange={handleChange}
          />
        </Label>
      ))}

      {/* 제출 버튼 */}
      <SubmitButton type="submit">수정</SubmitButton>
    </FormWrapper>
  );
}
