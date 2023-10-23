import styles from "./ModalThmThnhVin.module.css";

const ModalThmThnhVin = () => {
  return (
    <div className={styles.modalThmThnhVin}>
      <div className={styles.labelParent}>
        <div className={styles.label}>Thêm thành viên</div>
        <img className={styles.closeIcon} alt="" src="/close.svg" />
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
        <label>
              <input
                type="radio"
                name="group"
                value={group.id}
                checked={selectedGroup === group.id}
                onChange={() => handleGroupSelect(group.id)}
              />
              {group.name}
         </label>
          <div className={styles.input1}>
            <img
              className={styles.outlineSearch}
              alt=""
              src="/uangledown.svg"
            />
            <img
              className={styles.uangleDownIcon}
              alt=""
              src="/uangledown2.svg"
            />
            <img className={styles.outlineClose} alt="" src="/uangledown.svg" />
          </div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.label3}>Thông tin chung</div>
          <div className={styles.frameParent}>
            <div className={styles.inputGroup}>
              <div className={styles.input2}>
                <div className={styles.input3}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <div className={styles.labelPointer}>
                  <label htmlFor="firstName">Họ:</label>
                  <input
                     type="text"
                     id="firstName"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                   />
                     <label htmlFor="lastName">Tên:</label>
                     <input
                       type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                     />
                    <div className={styles.pointer} />
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
              </div>
              <div className={styles.input2}>
                <div className={styles.input3}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <div className={styles.labelPointer}>
                  <label htmlFor="username">Tên đăng nhập:</label>
                   <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />   
                  <div className={styles.pointer} />
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.input2}>
                <div className={styles.input3}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <div className={styles.labelPointer}>
                  <label htmlFor="birthdate">Ngày sinh:</label>
                  <DatePicker
                           selected={birthdate}
                           onChange={handleDateChange}
                           dateFormat="dd/MM/yyyy" // Định dạng hiển thị ngày tháng năm
                    />
                    <div className={styles.pointer} />
                  </div>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/ucalender.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
              </div>
              <div className={styles.input2}>
                <div className={styles.input3}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <div className={styles.labelPointer}>
                  <label htmlFor="email">Email:</label>
                   <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={styles.pointer} />
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
              </div>
              <div className={styles.input2}>
                <div className={styles.input3}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <div className={styles.labelPointer}>
                  <label htmlFor="phoneNumber">Số điện thoại:</label>
                     <input
                       type="tel"
                       id="phoneNumber"
                       value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)}
                      />     
                    <div className={styles.pointer} />
                  </div>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/uangledown.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.input}>
          <label>Đơn vị cấp trên:</label>
           <select
            value={selectedUnit}
             onChange={(e) => handleUnitSelect(e.target.value)}
            >
             <option value="">Chọn đơn vị</option>
              {units.map((unit, index) => (
              <option key={index} value={unit}>
               {unit}
              </option>
             ))}
            </select>
            <div className={styles.dropdown}>
              <div className={styles.placeholderIcons}>
                <img
                  className={styles.outlineSearch6}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label15}>Dropdown</div>
                <img
                  className={styles.outlineSearch6}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.icons}>
                <img
                  className={styles.outlineSearch6}
                  alt=""
                  src="/uangledown.svg"
                />
                <img
                  className={styles.uangleDownIcon}
                  alt=""
                  src="/keyboardarrowdown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.multiselect}>
            <div className={styles.listElementParent}>
              <div className={styles.listElement}>
                <div className={styles.label}>Đơn vị cấp trên 1</div>
                <img
                  className={styles.fillCheckmark}
                  alt=""
                  src="/-fill--checkmark.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label17}>Nguyễn Minh Hoàng</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label18}>Đơn vị cấp trên 2</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label17}>Đặng Hoàng Nam</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label17}>Đặng Hoàng Nam</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label18}>Đơn vị cấp trên 3</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label18}>Đơn vị cấp trên 4</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label18}>Đơn vị cấp trên 5</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label17}>Nguyễn Minh Khôi</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label17}>Nguyễn Minh Khôi</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.input1}>
            <img
              className={styles.outlineSearch}
              alt=""
              src="/uangledown.svg"
            />
          <label htmlFor="status">Trạng thái:</label>
           <input
             type="text"
              id="status"
              value={status}
              onChange={handleStatusChange}
            />   
            <img
              className={styles.outlineSearch}
              alt=""
              src="/uangledown.svg"
            />
            <img className={styles.outlineClose} alt="" src="/uangledown.svg" />
          </div>
        </div>
      </div>
      <div className={styles.modalfooter}>
        <div className={styles.icons}>
          <div className={styles.button}>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/uangledown.svg"
            />
                <button onClick={handleClick}>
                    Hủy bỏ
                </button>
          </div>
          <div className={styles.filter}>
            <div className={styles.ucheckParent}>
              <img className={styles.uangleDownIcon} alt="" src="/ucheck.svg" />
              <div className={styles.spXpTheoParent}>
                <div className={styles.spXpTheo}>Sắp xếp theo</div>
                <button onClick={handleClick}>
                    Cập nhật
                </button>
              </div>
            </div>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/uangledown.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalThmThnhVin;
