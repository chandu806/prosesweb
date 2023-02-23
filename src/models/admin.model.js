const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
    {
       
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

adminSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

adminSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;

//registeer token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJlbWFpbCI6Im1haGluZHJhamF5YXZhcmFtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JFpsbWN4VllkVWpvTGIyM2RRc0xsY092RGx1akNoYXk5MnNSdWlNVk9NTkRxWDA3MFRLcUouIiwiX2lkIjoiNjJkMTI3ZjY4ZDhhYWE3YjQ2ODc4MmI5In0sImlhdCI6MTY1Nzg3NDQyM30.7vxzVqfQ7JKVH6p87CoAX0PmhtEugA7wTtMPkIDFkCY