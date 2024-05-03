# ToastContainer 만들기

## 필요한것 정리.
- ToastContainer Component(출력될 UI)
  - 몇가지의 theme을 정해서 사용될 수 있게.
    - success, error, warning, info
    - 객체를 받아서 처리할 수 있게 하기.
    - tailwind 사용하기 때문에 twMerge 사용
      - twMerge는 className에 입력된 내용 중 중복되는 class 중 가장 뒤에있는 class를 사용한다.
  - Toast가 몇초간 뜰지 설정할 수 있게.
  - ToastContainer 출력 및 사라질때 애니메이션 추가.
  - 일단 어렵지 않게 만들어보고. 고도화할것.
- ToastProvider(Context API 사용)

