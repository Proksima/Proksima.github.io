initSidebarItems({"macro":[["ash!","Macro to execute the given command using the Almquist Shell."],["bash!","Macro to execute the given command using the Bourne Again Shell."],["csh!","Macro to execute the given command using the C Shell."],["dash!","Macro to execute the given command using the Debian Almquist Shell."],["fish!","Macro to execute the given command using the Fish Shell."],["ksh!","Macro to execute the given command using the Korn Shell."],["mksh!","Macro to execute the given command using the MirBSD Korn Shell."],["sh!","Macro to execute the given command using the Posix Shell."],["tcsh!","Macro to execute the given command using the TENEX C Shell."],["wrap_ash!","Macro to execute the given command using the Almquist Shell and wraping the resulting tuple into a Result."],["wrap_bash!","Macro to execute the given command using the Bourne Again Shell and wraping the resulting tuple into a Result."],["wrap_csh!","Macro to execute the given command using the C Shell and wraping the resulting tuple into a Result."],["wrap_dash!","Macro to execute the given command using the Debian Almquist Shell and wraping the resulting tuple into a Result."],["wrap_fish!","Macro to execute the given command using the Fish Shell and wraping the resulting tuple into a Result."],["wrap_ksh!","Macro to execute the given command using the Korn Shell and wraping the resulting tuple into a Result."],["wrap_mksh!","Macro to execute the given command using the MirBSD Korn Shell and wraping the resulting tuple into a Result."],["wrap_sh!","Macro to execute the given command using the Posix Shell and wraping the resulting tuple into a Result."],["wrap_tcsh!","Macro to execute the given command using the TENEX C Shell and wraping the resulting tuple into a Result."],["wrap_zsh!","Macro to execute the given command using the Z Shell and wraping the resulting tuple into a Result."],["zsh!","Macro to execute the given command using the Z Shell."]],"struct":[["Error","Struct holding the resulting environment after executing a failed command with the `wrap_*` family of macros. It implements the Error trait and its implementation of the Display trait is identical to the implementation of the Display trait of its `stderr` field."]],"type":[["Result","Type returned by the `wrap_*` family of macros. Will either be `Ok(stdout)` or an error containing code, stdout and stderr resulting from executing the command."]]});